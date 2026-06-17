import { useRouter } from 'next/navigation'
import React, { ElementRef, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom';

function Modal({ children }: { children: React.ReactNode }) {

    const router = useRouter();
    const dailogRef = useRef<ElementRef<'dialog'>>(null)

    useEffect(() => {
        if (!dailogRef.current?.open) {
            dailogRef.current?.showModal()
        }
    }, [])

    function onDismiss() {
        router.back()
    }

    return (
        createPortal(<div>
            <dialog ref={dailogRef} onClose={onDismiss}>
                {children}
                <button 
                onClick={onDismiss}
                className='bg-sky-500 text-white'>Close</button>
            </dialog>
        </div>, document.getElementById('modal-root') !)
    )
}

export default Modal
