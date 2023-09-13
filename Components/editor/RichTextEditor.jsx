'use client'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { SvgBold, SvgIHeader, SvgItalic } from '../svg/editor'

const Tiptap = () => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: '<br/><br/>',
    })

    return (
        <div className='border border-gray-300  rounded-sm mt-5 '>
            {
                editor && (<div className="flex gap-2 mb-5 border-b-gray-300 border-b p-3">
                    <button
                        className={`formarters ${editor.isActive('heading', { level: 1 }) ? 'active' : ''}`}
                        onClick={() => editor.chain().focus().toggleBold().run()}>
                         <SvgBold/>
                    </button>
                    <button
                        className={`formarters ${editor.isActive('heading', { level: 2 }) ? 'active' : ''}`}
                        onClick={() => editor.chain().focus().toggleItalic().run()}>
                        <SvgItalic/>
                    </button>

                    <button
                        className={`formarters ${editor.isActive('heading', { level: 2 }) ? 'active' : ''}`}
                        onClick={() => editor.chain().focus().toggleHeading('heading', { level: 1 }).run()}>
                       <SvgIHeader/>
                    </button>


                </div>)
            }
            <EditorContent editor={editor} className='p-3' />
        </div>
    )
}

export default Tiptap
