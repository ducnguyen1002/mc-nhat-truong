import React, { useRef, useEffect, PropsWithChildren } from 'react'

import { Fancybox as NativeFancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

function Fancybox(props) {
    const containerRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current

        const delegate = props.delegate || '[data-fancybox]'
        const options = props.options || {}

        let scrollY = 0

        const handleBeforeShow = () => {
            scrollY = window.scrollY
        }

        const handleAfterClose = () => {
            // Xoá hash khỏi URL
            history.replaceState(
                null,
                '',
                window.location.pathname + window.location.search
            )
            // Trả về vị trí scroll cũ
            window.scrollTo({ top: scrollY })
        }

        // Gán Fancybox
        NativeFancybox.bind(container, delegate, {
            ...options,
            Hash: false, // Tuỳ chọn: vô hiệu hoá hash nếu không cần
        })

        // Lắng nghe sự kiện Fancybox
        document.addEventListener('beforeShow.fb', handleBeforeShow)
        document.addEventListener('afterClose.fb', handleAfterClose)

        return () => {
            NativeFancybox.unbind(container)
            NativeFancybox.close()
            document.removeEventListener('beforeShow.fb', handleBeforeShow)
            document.removeEventListener('afterClose.fb', handleAfterClose)
        }
    }, [])

    return (
        <div className={`${props?.className}`} ref={containerRef}>
            {props.children}
        </div>
    )
}

export default Fancybox
