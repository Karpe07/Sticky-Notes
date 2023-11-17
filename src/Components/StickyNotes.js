import React , {useState, useRef} from "react";

export default function StickyNotes({onClose}){
    const [allowMove, setallowMove] = useState(false)
    const StickyNoteRef = useRef()

    const [dx, setDx] = useState(0)
    const [dy, setDy] = useState(0)

    function handleMouseDown(e){
        const dimension = StickyNoteRef.current.getBoundingClientRect()
        setallowMove(true)
        setDx(e.clientX - dimension.x)
        setDy(e.clientY - dimension.y)
        console.log(dx,dy)
    }
    function handleMouseMove(e){
        if(allowMove){
            console.log("Moving Notes")
            const x = e.clientX - dx
            const y = e.clientY - dy
            StickyNoteRef.current.style.left = x + 'px'
            StickyNoteRef.current.style.top = y + 'px'
        }
    }
    function handleMouseUp(){
        setallowMove(false)
    }
    return(
        <div className="stickynotes" ref={StickyNoteRef}>
            <div 
                className="stickyHeader"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
            >
                <div>StickyNotes</div>
                <div className="close" onClick={onClose} >&times;</div>
            </div>
            <textarea cols="30" rows="10"></textarea>
        </div>
    )
}
