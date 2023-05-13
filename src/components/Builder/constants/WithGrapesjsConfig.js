import "grapesjs/dist/css/grapes.min.css";
import { plugin1 } from "./Plugin";
// import CodeEditor from '../dist/grapesjs-component-code-editor.min.js';
// import exportCode from '../dist/grapesjs-export-plugin.min.js';

//dynamic loading
function loadDependency(plugin) {
    // plugin.forEach((value) => require(`../dist/${value.name}.min`));
  }
  
  const getOptions = (plugin) => {
    let optMap = new Map();
    plugin.forEach((value) => {
      let keyString = value.name;
      let blocks = value.blocks;
      let blockCategories = value.blockCategories;
      optMap.set(keyString, { blocks, blockCategories });
    });
    //console.log(Object.fromEntries(optMap))
    return Object.fromEntries(optMap);
  };

const WithGrapesjsConfig = dynamicConfiguration => {
    const pluginName = dynamicConfiguration.plugin.map((value) => value.name);
    const pluginOpts = getOptions(dynamicConfiguration.plugin);
    // loadDependency(dynamicConfiguration.plugin);
  const config = {
    // Indicate where to init the editor. You can also pass an HTMLElement
    container: '#gjs',
    // Get the content for the canvas directly from the element
    // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
    fromElement: true,
    // Size of the editor
    height: '90vh',
    width: 'auto',
    // Disable the storage manager for the moment
    storageManager: false,
    //height: '680px',
    allowScripts: true,
    showDevices: false,
    avoidInlineStyle: true,
    //for editor mode
    //dragMode:'translate',
    forceClass: false,
    // Avoid any default panel
    blockManager: {
      appendTo: '#blocks',
      open:false,
    },
    // layer manager
    // layerManager: {
    //   appendTo: '.layers-container',
    // },
    // We define a default panel as a sidebar to contain layers
    panels: {
      defaults: [
        // ...
        {
          id: 'panel-switcher',
          el: '.panel__switcher',
          buttons: [
            {
                id: "select",
                className: "selectIcon",
                command: "sw-visibility",
                context: "core:component-select",
                attributes: { title: "Select element" },
              },
              {
                id: "undo",
                className: "undo",
                command: "core:undo",
                attributes: { title: "Undo (CTRL/CMD + Z)" },
              },
              {
                id: "redo",
                className: "redo",
                command: "core:redo",
                attributes: { title: "Redo (CTRL/CMD + SHIFT + Z)" },
              },
              {
                id: "clean-all",
                className: "trash",
                command: "core:canvas-clear",
                attributes: { title: "Empty canvas" },
              },
              {
                id: "images",
                className: "image",
                command: "open-assset-manager",
                attributes: { title: "Add Images" },
              },
              {
                id: "codeExport",
                className: "export",
                command: "export-template",
                attributes: { title: "Export Code" },
              },
              {
                attributes: {
                  title: 'Open Code'
                },
                className: 'editor',
                command: 'open-code',
                togglable: false, //do not close when button is clicked again
                id: 'open-code'
              }
          ],
        },
        {
          id: 'panel-switcher1',
          el: '.views-actions',
          buttons:[
            {
              id: "deviceXl",
              className: "screenWindow",
              command: "set-device-xl",
              attributes: { title: "Extra Large" },
            },
            {
              id: "deviceSm",
              className: "tabWindow",
              command: "set-device-sm",
              attributes: { title: "Small" },
            },
            {
              id: "deviceXs",
              className: "mobilewindow",
              command: "set-device-xs",
              attributes: { title: "Extra Small" },
            },
          ]
        }
      ],
    },
    domComponents: {
        storeWrapper: 1,
        //styles for body
        wrapper: {
          stylable: [
            // Default attributes
            "background",
            "background-color",
            "background-image",
            "background-repeat",
            "background-attachment",
            "background-position",
            "background-size",
            "font-family",
            "font-size",
            "color",
            'width',
            'height', 
            'max-width',
            'min-height', 
            'margin', 
            'margin-top', 
            'margin-right', 
            'margin-bottom', 
            'margin-left', 
            'padding', 
            'padding-top', 
            'padding-right', 
            'padding-bottom', 
            'padding-left'
          ],
        },
      },
    assetManager: {
        storageType: "",
        storeOnChange: true,
        storeAfterUpload: true,
        assets: [],
        uploadFile:function(e){
          var files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
          // ...send somewhere     
          console.log(files)
          },
      },
      plugins:[plugin1],
      // plugins: [...pluginName,CodeEditor,exportCode],
      // pluginsOpts: { ...pluginOpts,CodeEditor:{},exportCode:{} },
      colorPicker: { appendTo: "parent", offset: { top: 26, left: -180 } },
    // The Selector Manager allows to assign classes and
    // different states (eg. :hover) on components.
    // Generally, it's used in conjunction with Style Manager
    // but it's not mandatory
    selectorManager: {
      appendTo: '#traits-container',
      componentFirst: true,
    },
    traitManager: {
        appendTo: "#traits-container",
        defaults: {},
      },
    styleManager: {
      appendTo: '.styles-container',
      sectors: [
        {
          name: "Basic",
          open: false,
          // use buildProps to create built-in properties
          buildProps: [
            "background",
            "background-image",
            "background-color",
            "background-size",
            "background-repeat",
            "background-position",
            "font-family",
            "color",
            "font-size",
            "font-weight",
            "letter-spacing",
            // "border",
            "border-color",
            "border-style",
            "border-width",
            'margin', 
            'padding', 
          ],
        },
        {
          name: "Extra",
          open: false,
          // use buildProps to create built-in properties
          buildProps: [
            "font-weight",
            "letter-spacing",
            "line-height",
            "text-transform",
            "text-align",
            "text-decoration",
            "font-style",
            "text-shadow",
            'margin',
            'padding',
            'border-radius',
            "width",
            "height",
            "max-height",
            "max-width",
            "min-height",
            "min-width",
            "position",
            "top",
            "bottom",
            "left",
            "right",
            "opacity",
            "box-shadow",
            "background",
            "transform", 
            "perspective",
            'cursor',  
            'overflow', 
            'overflow-x', 
            'overflow-y',
            'transition', 
            "display",
            'flex-direction', 
            'justify-content', 
            'align-items', 
            'flex-children',
            'order',
            'flex',
            'align-self',
            'flex-wrap', 
            'align-content', 
          ],
          // flex-width doesn't actually exist, so extend it in properties via `id`
          properties: [
            {
              name: "Font",
              property: "font-family",
              toRequire: 1,
            },
            {
              name: "Font Weight",
              property: "font-weight",
              id: "font-weight",
              toRequire: 1,
            },
            {
              name: "Letter Spacing",
              property: "letter-spacing",
              id: "letter-spacing",
              toRequire: 1,
            },
            {
              name: "Line Height",
              property: "line-height",
              id: "line-height",
              toRequire: 1,
            },
            {
              name: "Text Transform",
              property: "text-transform",
              defaults: "none",
              type: "select",
              list: [
                { value: "none", name: "None" },
                { value: "capitalize", name: "Capitalize" },
                { value: "uppercase", name: "UPPERCASE" },
                { value: "lowercase", name: "lowercase" },
              ],
            },
            {
              property: "text-align",
              type: "radio",
              defaults: "left",
              list: [
                { value: "left", name: "Left", className: "fa fa-align-left" },
                {
                  value: "center",
                  name: "Center",
                  className: "fa fa-align-center",
                },
                {
                  value: "right",
                  name: "Right",
                  className: "fa fa-align-right",
                },
                {
                  value: "justify",
                  name: "Justify",
                  className: "fa fa-align-justify",
                },
              ],
              toRequire: 1,
            },
            {
              property: "text-decoration",
              type: "radio",
              defaults: "none",
              toRequire: 1,
              list: [
                { value: "none", name: "None", className: "fa fa-times" },
                {
                  value: "underline",
                  name: "underline",
                  className: "fa fa-underline",
                },
                {
                  value: "line-through",
                  name: "Line-through",
                  className: "fa fa-strikethrough",
                },
              ],
            },
            {
              name: "Font Style",
              property: "font-style",
              defaults: "normal",
              type: "select",
              toRequire: 1,
              list: [
                { value: "normal", name: "normal" },
                { value: "italic", name: "italic" },
                { value: "oblique", name: "oblique" },
              ],
            },
            {
              property: "text-shadow",
              toRequire: 1,
              properties: [
                { name: "X position", property: "text-shadow-h" },
                { name: "Y position", property: "text-shadow-v" },
                { name: "Blur", property: "text-shadow-blur" },
                { name: "Color", property: "text-shadow-color" },
              ],
            },
            {
              property: 'border-radius',
              toRequire: 1,
              properties:[
                { name: 'Top-Left', property: 'border-top-left-radius' , toRequire: 1},
                { name: 'Top-Right', property: 'border-top-right-radius', toRequire: 1},
                { name: 'Bottom-Left', property: 'border-bottom-left-radius', toRequire: 1},
                { name: 'Bottom-Right', property: 'border-bottom-right-radius', toRequire: 1},
              ],
            },
            {
              property: "width",
              toRequire: 1,
              name: "Width",
              id: "width",
            },
            {
              property: "height",
              toRequire: 1,
              name: "Height",
              id: "height",
            },
            {
              property: 'margin',
              toRequire: 1,
              properties:[
                { name: 'Top', property: 'margin-top' , toRequire: 1},
                { name: 'Right', property: 'margin-right', toRequire: 1},
                { name: 'Bottom', property: 'margin-bottom', toRequire: 1},
                { name: 'Left', property: 'margin-left', toRequire: 1},
              ],
            },
            {
              property: 'padding',
              toRequire: 1,
              properties:[
                { name: 'Top', property: 'padding-top' , toRequire: 1},
                { name: 'Right', property: 'padding-right', toRequire: 1},
                { name: 'Bottom', property: 'padding-bottom', toRequire: 1},
                { name: 'Left', property: 'padding-left', toRequire: 1},
              ],
            },
            {
              property: "max-height",
              name: "Max Height",
              id: "max-height",
              toRequire: 1,
            },
            {
              property: "max-width",
              name: "Max Width",
              id: "max-width",
              toRequire: 1,
            },
            {
              property: "min-height",
              name: "Min Height",
              id: "min-height",
              toRequire: 1,
            },
            {
              property: "min-width",
              name: "Min Width",
              id: "min-width",
              toRequire: 1,
            },
            {
              property: "display",
              name: "Display",
              id: "display",
              toRequire: 1,
            },
            {
              property: "position",
              name: "Position",
              id: "position",
              toRequire: 1,
            },
            {
              property: "background",
              name: "Background",
              id: "background",
              toRequire: 1,
            },
            {
              type: 'slider',
              property: 'opacity',
              defaults: 1,
              step: 0.01,
              max: 1,
              min:0,
              toRequire: 1,
            },
            {
              property: "top",
              id: "top",
              name: "Top",
              toRequire: 1,
            },
            {
              property: "bottom",
              id: "bottom",
              name: "Bottom",
              toRequire: 1,
            },
            {
              property: "left",
              id: "left",
              name: "Left",
              toRequire: 1,
            },
            {
              property: "right",
              id: "right",
              name: "Right",
              toRequire: 1,
            },
            {
              property: 'box-shadow',
              id:'box-shadow',
              toRequire:1,
              properties: [
                { name: 'X position', property: 'box-shadow-h', toRequire: 1},
                { name: 'Y position', property: 'box-shadow-v', toRequire: 1},
                { name: 'Blur', property: 'box-shadow-blur', toRequire: 1},
                { name: 'Spread', property: 'box-shadow-spread', toRequire: 1},
                { name: 'Color', property: 'box-shadow-color', toRequire: 1},
                { name: 'Shadow type', property: 'box-shadow-type', toRequire: 1}
              ],
            },
            //check it once
            {
              property: 'transform',
              id:'transform',
              toRequire: 1,
              properties:[
                { name: 'Rotate X', property: 'transform-rotate-x', toRequire: 1},
                { name: 'Rotate Y', property: 'transform-rotate-y', toRequire: 1},
                { name: 'Rotate Z', property: 'transform-rotate-z', toRequire: 1},
                { name: 'Scale X', property: 'transform-scale-x', toRequire: 1},
                { name: 'Scale Y', property: 'transform-scale-y', toRequire: 1},
                { name: 'Scale Z', property: 'transform-scale-z', toRequire: 1}
              ],
            },
            {
              property: 'transition',
              toRequire: 1,
                    properties:[
                      { name: 'Property', property: 'transition-property', toRequire: 1},
                      { name: 'Duration', property: 'transition-duration', toRequire: 1},
                      { name: 'Easing', property: 'transition-timing-function', toRequire: 1}
                    ],
                toRequire:1,
              },
            {
              property: "perspective",
              id: "perspective",
              name: "Perspective",
              toRequire: 1,
            },
            {
              property  : 'flex-direction',
              toRequire : 1,
              id:'flex-direction',
              type    : 'select',
              defaults  : 'row',
              list    : [{
                        value   : 'row',
                        name    : 'Row',
                        className : 'icons-flex icon-dir-row',
                        title   : 'Row',
                        toRequire: 1
                      },{
                        value   : 'row-reverse',
                        name    : 'Row reverse',
                        className : 'icons-flex icon-dir-row-rev',
                        title   : 'Row reverse',
                        toRequire: 1
                      },{
                        value   : 'column',
                        name    : 'Column',
                        title   : 'Column',
                        className : 'icons-flex icon-dir-col',
                        toRequire: 1
                      },{
                        value   : 'column-reverse',
                        name    : 'Column reverse',
                        title   : 'Column reverse',
                        className : 'icons-flex icon-dir-col-rev',
                        toRequire: 1
                      }],
            },
            {
              name      : 'Justify-content',
              property  : 'justify-content',
              type    : 'select',
              defaults  : 'flex-start',
              toRequire : 1,
              list    : [{
                        value   : 'flex-start',
                        className : 'icons-flex icon-just-start',
                        title   : 'Start',
                        toRequire: 1
                      },{
                        value   : 'flex-end',
                        title    : 'End',
                        className : 'icons-flex icon-just-end',
                        toRequire: 1
                      },{
                        value   : 'space-between',
                        title    : 'Space between',
                        className : 'icons-flex icon-just-sp-bet',
                        toRequire: 1
                      },{
                        value   : 'space-around',
                        title    : 'Space around',
                        className : 'icons-flex icon-just-sp-ar',
                        toRequire: 1
                      },{
                        value   : 'center',
                        title    : 'Center',
                        className : 'icons-flex icon-just-sp-cent',
                        toRequire: 1
                      }],
            },{
              name      : 'align-items',
              property  : 'align-items',
              type    : 'select',
              defaults  : 'center',
              toRequire: 1,
              list    : [{
                        value   : 'flex-start',
                        title    : 'Start',
                        className : 'icons-flex icon-al-start',
                        toRequire: 1
                      },{
                        value   : 'flex-end',
                        title    : 'End',
                        className : 'icons-flex icon-al-end',
                        toRequire: 1
                      },{
                        value   : 'stretch',
                        title    : 'Stretch',
                        className : 'icons-flex icon-al-str',
                        toRequire: 1
                      },{
                        value   : 'center',
                        title    : 'Center',
                        className : 'icons-flex icon-al-center',
                        toRequire: 1
                      }],
            },{
              name: 'flex-children',
              property: 'label-parent-flex',
              type: 'integer',
              toRequire: 1
            },{
              name:     'order',
              property:   'order',
              type:     'integer',
              defaults :  0,
              toRequire: 1,
              min: 0
            },{
              name    : 'flex',
              property  : 'flex',
              type    : 'composite',
              toRequire: 1,
              properties  : [{
                      name:     'Grow',
                      property:   'flex-grow',
                      type:     'integer',
                      defaults :  0,
                      min: 0,
                      toRequire: 1
                    },{
                      name:     'Shrink',
                      property:   'flex-shrink',
                      type:     'integer',
                      defaults :  0,
                      min: 0,
                      toRequire: 1
                    },{
                      name:     'Basis',
                      property:   'flex-basis',
                      type:     'integer',
                      units:    ['px','%',''],
                      unit: '',
                      defaults :  'auto',
                      toRequire: 1
                    }],
            },{
              name      : 'align-self',
              property  : 'align-self',
              type      : 'select',
              defaults  : 'auto',
              toRequire: 1,
              list    : [{
                        value   : 'auto',
                        name    : 'Auto',
                        toRequire: 1,
                      },{
                        value   : 'flex-start',
                        title    : 'Start',
                        className : 'icons-flex icon-al-start',
                        toRequire: 1
                      },{
                        value   : 'flex-end',
                        title    : 'End',
                        className : 'icons-flex icon-al-end',
                        toRequire: 1
                      },{
                        value   : 'stretch',
                        title    : 'Stretch',
                        className : 'icons-flex icon-al-str',
                        toRequire: 1
                      },{
                        value   : 'center',
                        title    : 'Center',
                        className : 'icons-flex icon-al-center',
                        toRequire: 1
                      }],
            }
          ],
        },
      ],
    },
    storageManager: {
        id: "gjs-", // Prefix identifier that will be used on parameters
        type: "local", // Type of the storage
        autosave: true, // Store data automatically
        autoload: false, // Autoload stored data on init
        stepsBeforeSave: 1, // If autosave enabled, indicates how many changes are necessary before store method is triggered
      },
      canvas: {
        //autoscrollLimit: 50,
        styles: [
          "https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css",
          "https://my-assets-bucket.s3.amazonaws.com/assets/plugin1.css",
          "https://my-assets-bucket.s3.amazonaws.com/assets/framework1.css",
          "https://fonts.googleapis.com/css2?family=Manrope:wght@200,300,400,500,600,700&display=swap",
          "https://fonts.googleapis.com/css2?family=Nunito:wght@200,300,400,500,600,700&display=swap",
        ],
        scripts: [
          "https://cdn.tailwindcss.com",
          "https://code.jquery.com/jquery-3.4.1.slim.min.js",
          "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
          "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
        ],
      },
  };
  return config;
};

export default WithGrapesjsConfig;
