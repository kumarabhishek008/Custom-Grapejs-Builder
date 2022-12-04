import grapesjs from 'grapesjs';
import loadclients from './landingPage';
import loadcontents from './contents';
import loadcta from './cta';
import loadfeatures from './features';
import loadfaq from './faq';
import loadfooter from './footer';
import loadintroduction from './introduction';
import loadleadform from './leadform';
import loadpricings from './pricings';
import loadteams from './teams';
import loadtestimonials from './landingpage3';
import loadtextcontent from './landingpage2';
import loadNavigation from './navbar';


export default grapesjs.plugins.add('plugin1', (editor, opts = {}) => {

  window.editor = editor;
  const opts_blocks = opts.blocks || {};
  const opts_labels = opts.labels || {};
  const opts_categories = opts.blockCategories || {};
  delete opts['blocks'];
  delete opts['labels'];
  delete opts['blockCategories'];

  const default_blocks = {
    profilepages_header_1:true,
    profilepages_header_2:true,
    profilepages_header_3:true,
    profilepages_clients_1:true,
    profilepages_clients_2:true,
    profilepages_clients_3:true,
    profilepages_contents_1:true,
    profilepages_contents_2:true,
    profilepages_contents_3:true,
    profilepages_contents_4:true,
    profilepages_contents_5:true,
    profilepages_contents_6:true,
    profilepages_contents_7:true,
    profilepages_contents_8:true,
    profilepages_contents_9:true,
    profilepages_contents_10:true,
    profilepages_cta_1:true,
    profilepages_cta_2:true,
    profilepages_cta_3:true,
    profilepages_cta_4:true,
    profilepages_faq_1:true,
    profilepages_faq_2:true,
    profilepages_faq_3:true,
    profilepages_faq_4:true,
    profilepages_footer_1:true,
    profilepages_footer_2:true,
    profilepages_footer_3:true,
    profilepages_features_1:true,
    profilepages_features_2:true,
    profilepages_features_3:true,
    profilepages_features_4:true,
    profilepages_features_5:true,
    profilepages_banner_1:true,
    profilepages_banner_2:true,
    profilepages_banner_3:true,
    profilepages_banner_4:true,
    profilepages_banner_5:true,
    profilepages_banner_6:true,
    profilepages_banner_7:true,
    profilepages_banner_8:true,
    profilepages_form_1: true,
    profilepages_form_2: true,
    profilepages_form_3: true,
    profilepages_form_4: true,
    profilepages_form_5: true,
    profilepages_form_6: true,
    profilepages_pricings_1:true,
    profilepages_pricings_2:true,
    profilepages_pricings_3:true,
    profilepages_teams_1:true,
    profilepages_teams_2:true,
    profilepages_teams_3:true,
    profilepages_testimonials_1:true,
    profilepages_testimonials_2:true,
    profilepages_testimonials_3:true,
    profilepages_testimonials_4:true,
    profilepages_textcontent_1:true,
    profilepages_textcontent_2:true,
    profilepages_textcontent_3:true,
    profilepages_textcontent_4:true,

  };
  // labels
  const default_labels = {
    categoryHeader: 'Header',
    categoryclients: 'Landingpage 1',
    categorycontents: 'Contents',
    categorycta:'Call to Actions',
    categoryfeatures:'Feature',
    categoryfaq:'FAQ',
    categoryfooter:'Footer',
    categoryBanner:'Banner',
    categoryform: 'Form',
    categorypricings: 'Pricing',
    categoryteams:'Teams',
    categorytestimonials:'Landingpage 3',
    categorytextcontent:'Landingpage 2',
  };
  //  add block categories
  const default_categories = {
    'header':true,
    'clients':true,
    'contents':true,
    'cta':true,
    'features':true,
    'faq':true,
    'footer':true,
    'banner':true,
    'form': true,
    'pricings':true,
    'teams':true,
    'testimonials':true,
    'textcontent':true,
  };

  let options = { ...{
    blocks: Object.assign(default_blocks, opts_blocks),
    labels: Object.assign(default_labels, opts_labels),
    blockCategories: Object.assign(default_categories, opts_categories),
    optionsStringSeparator: '::',
    gridDevices: true,
    gridDevicesPanel: false,
    classNavigation: 'nav',
    classTabPanes: 'tab-content',
    classTabPane: 'tab-pane',
    classTab: 'nav-item',
  },  ...opts };

  // Add components
  loadNavigation(editor,options);
  // loadintroduction(editor,options);
  // loadfeatures(editor,options);
  loadclients(editor,options);
  // loadleadform(editor,options);
  // loadcta(editor,options);
  loadtextcontent(editor,options);
  // loadcontents(editor,options);
  // loadpricings(editor,options);
  // loadteams(editor,options);
  // loadfaq(editor,options);
  loadtestimonials(editor,options);
  // loadfooter(editor,options);


});
