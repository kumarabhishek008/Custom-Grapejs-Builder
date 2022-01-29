import React, { useEffect } from "react";
import Grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import dynamicConfig from "./grapesjsConfig";
import "./app.css";

const GrapesjsMain = () => {
  useEffect(() => {
    loadGrapesJs();
  }, []);

  const loadComponents = (editor) => {
    editor.BlockManager.add("my-block-id", {
      // ...
      content: {
        tagName: "div",
        draggable: false,
        attributes: { "some-attribute": "some-value" },
        components: [
          {
            tagName: "span",
            content: "<b>Some static content</b>",
          },
          {
            tagName: "div",
            // use `content` for static strings, `components` string will be parsed
            // and transformed in Components
            components: "<span>HTML at some point</span>",
          },
        ],
      },
    });
    editor.Panels.addPanel({
      id: "panel-top",
      el: ".panel__top",
    });
    editor.Panels.addPanel({
      id: "basic-actions",
      el: ".panel__basic-actions",
      buttons: [
        {
          id: "visibility",
          active: true, // active by default
          className: "btn-toggle-borders",
          label: "<u>B</u>",
          command: "sw-visibility", // Built-in command
        },
        {
          id: "export",
          className: "btn-open-export",
          label: "Exp",
          command: "export-template",
          context: "export-template", // For grouping context of buttons from the same panel
        },
        {
          id: "show-json",
          className: "btn-show-json",
          label: "JSON",
          context: "show-json",
          command(editor) {
            editor.Modal.setTitle("Components JSON")
              .setContent(
                `<textarea style="width:100%; height: 250px;">
                ${JSON.stringify(editor.getComponents())}
              </textarea>`
              )
              .open();
          },
        },
      ],
    });
    editor.Commands.add('show-traits', {
      getTraitsEl(editor) {
        const row = editor.getContainer().closest('.editor-row');
        return row.querySelector('.traits-container');
      },
      run(editor, sender) {
        this.getTraitsEl(editor).style.display = '';
      },
      stop(editor, sender) {
        this.getTraitsEl(editor).style.display = 'none';
      },
    });
    editor.Commands.add('set-device-desktop', {
      run: editor => editor.setDevice('Desktop')
    });
    editor.Commands.add('set-device-mobile', {
      run: editor => editor.setDevice('Mobile')
    });
    editor.Commands.add('set-device-tablet', {
      run: editor => editor.setDevice('Tablet')
    });
  };

  const loadGrapesJs = async () => {
    const editor = await Grapesjs.init(dynamicConfig());
    window.editor = editor;
    editor.on('style:property:update', (a)=>{
      console.log(a, 'dvdsvdsvsvs');
    })
    loadComponents(editor);
  };
  return (
    <>
      <div class="panel__top">
        <div class="panel__basic-actions"></div>
        <div class="panel__devices"></div>
        <div class="panel__switcher"></div>
      </div>
      <div class="editor-row">
        <div class="editor-canvas">
          <div id="gjs">
            <h1>Hello World Component!</h1>
          </div>
        </div>
        <div class="panel__right">
        <div class="traits-container"></div>
          <div class="layers-container"></div>
          <div class="styles-container"></div>
        </div>
      </div>

      <div id="blocks"></div>
    </>
  );
};

export default GrapesjsMain;
