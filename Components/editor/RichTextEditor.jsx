"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { SvgBold, SvgIHeader, SvgItalic } from "../svg/editor";
import { setDescription } from "@/store/slice-reducers/uploadSlice";
import { useDispatch, useSelector } from "react-redux";

const Tiptap = () => {
  const dispatch = useDispatch();
  const { description } = useSelector((state) => state.upload);

  const editor = useEditor({
    extensions: [StarterKit],
    content: description,
    onUpdate({ editor }) {
      const content = editor.getHTML();
      const textContent = extractTextFromHTML(content);
      dispatch(setDescription(textContent));
    },
  });

  const extractTextFromHTML = (htmlString) => {
    const temporaryElement = document.createElement("div");
    temporaryElement.innerHTML = htmlString;
    return temporaryElement.textContent || temporaryElement.innerText || "";
  };

  return (
    <div className='border border-gray-300  rounded-sm mt-5 '>
      {editor && (
        <div className='flex gap-2 mb-5 border-b-gray-300 border-b p-3'>
          <button
            className={`formarters ${
              editor.isActive("heading", { level: 1 }) ? "active" : ""
            }`}
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            <SvgBold />
          </button>
          <button
            className={`formarters ${
              editor.isActive("heading", { level: 2 }) ? "active" : ""
            }`}
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            <SvgItalic />
          </button>

          <button
            className={`formarters ${
              editor.isActive("heading", { level: 2 }) ? "active" : ""
            }`}
            onClick={() =>
              editor
                .chain()
                .focus()
                .toggleHeading("heading", { level: 1 })
                .run()
            }
          >
            <SvgIHeader />
          </button>
        </div>
      )}
      <EditorContent editor={editor} className='p-3' />
    </div>
  );
};

export default Tiptap;
