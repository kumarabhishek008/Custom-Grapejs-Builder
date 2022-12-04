import StripPayment,{StripBlocks} from './components/StripPayment';

export default (editor, config = {}) => {
    const c = config;
    const domc = editor.DomComponents;
    const blocks = c.blocks;
    const bm = editor.BlockManager;
    const cats = c.blockCategories;
    if(cats.StripPayment){
        if(blocks.strip_payment){
            StripBlocks(bm,c.labels.strip_payment)
            StripPayment(domc,config)
        }
    }
}