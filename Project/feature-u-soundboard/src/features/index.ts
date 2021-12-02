import baseUI from './common/baseUI/feature';
import playControl from './play-control/feature';
import soundUpload from './soundUpload/feature';
import categories from './categories/feature';
import sounds from './sounds/feature';
import account from './account/feature';
import app from './common/app/feature';
import home from './common/home/feature';
import search from './search/feature';
import tts from './tts/feature';

export default [
  tts,
  sounds,
  categories,
  soundUpload,
  search,
  playControl,
  account,
  baseUI,
  app,
  home,
];
