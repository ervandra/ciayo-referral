import { css } from 'styled-components';

import OperatorMonoBoldTTF from '../fonts/OperatorMono/OperatorMonoBold.ttf';
import OperatorMonoBoldWOFF from '../fonts/OperatorMono/OperatorMonoBold.woff';
import OperatorMonoBoldWOFF2 from '../fonts/OperatorMono/OperatorMonoBold.woff2';

import OperatorMonoBoldItalicTTF from '../fonts/OperatorMono/OperatorMonoBoldItalic.ttf';
import OperatorMonoBoldItalicWOFF from '../fonts/OperatorMono/OperatorMonoBoldItalic.woff';
import OperatorMonoBoldItalicWOFF2 from '../fonts/OperatorMono/OperatorMonoBoldItalic.woff2';

import OperatorMonoBookTTF from '../fonts/OperatorMono/OperatorMonoBook.ttf';
import OperatorMonoBookWOFF from '../fonts/OperatorMono/OperatorMonoBook.woff';
import OperatorMonoBookWOFF2 from '../fonts/OperatorMono/OperatorMonoBook.woff2';

import OperatorMonoBookItalicTTF from '../fonts/OperatorMono/OperatorMonoBookItalic.ttf';
import OperatorMonoBookItalicWOFF from '../fonts/OperatorMono/OperatorMonoBookItalic.woff';
import OperatorMonoBookItalicWOFF2 from '../fonts/OperatorMono/OperatorMonoBookItalic.woff2';

import OperatorMonoLightTTF from '../fonts/OperatorMono/OperatorMonoLight.ttf';
import OperatorMonoLightWOFF from '../fonts/OperatorMono/OperatorMonoLight.woff';
import OperatorMonoLightWOFF2 from '../fonts/OperatorMono/OperatorMonoLight.woff2';

import OperatorMonoLightItalicTTF from '../fonts/OperatorMono/OperatorMonoLightItalic.ttf';
import OperatorMonoLightItalicWOFF from '../fonts/OperatorMono/OperatorMonoLightItalic.woff';
import OperatorMonoLightItalicWOFF2 from '../fonts/OperatorMono/OperatorMonoLightItalic.woff2';

import OperatorMonoMediumTTF from '../fonts/OperatorMono/OperatorMonoMedium.ttf';
import OperatorMonoMediumWOFF from '../fonts/OperatorMono/OperatorMonoMedium.woff';
import OperatorMonoMediumWOFF2 from '../fonts/OperatorMono/OperatorMonoMedium.woff2';

import OperatorMonoMediumItalicTTF from '../fonts/OperatorMono/OperatorMonoMediumItalic.ttf';
import OperatorMonoMediumItalicWOFF from '../fonts/OperatorMono/OperatorMonoMediumItalic.woff';
import OperatorMonoMediumItalicWOFF2 from '../fonts/OperatorMono/OperatorMonoMediumItalic.woff2';

import OperatorMonoXLightTTF from '../fonts/OperatorMono/OperatorMonoXLight.ttf';
import OperatorMonoXLightWOFF from '../fonts/OperatorMono/OperatorMonoXLight.woff';
import OperatorMonoXLightWOFF2 from '../fonts/OperatorMono/OperatorMonoXLight.woff2';

import OperatorMonoXLightItalicTTF from '../fonts/OperatorMono/OperatorMonoXLightItalic.ttf';
import OperatorMonoXLightItalicWOFF from '../fonts/OperatorMono/OperatorMonoXLightItalic.woff';
import OperatorMonoXLightItalicWOFF2 from '../fonts/OperatorMono/OperatorMonoXLightItalic.woff2';

const FontFaces = css`
  @font-face {
    font-family: 'Operator Mono';
    src: url(${OperatorMonoXLightWOFF2}) format('woff2'), url(${OperatorMonoXLightWOFF}) format('woff'),
      url(${OperatorMonoXLightTTF}) format('truetype');
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: 'Operator Mono';
    src: url(${OperatorMonoXLightItalicWOFF2}) format('woff2'), url(${OperatorMonoXLightItalicWOFF}) format('woff'),
      url(${OperatorMonoXLightItalicTTF}) format('truetype');
    font-weight: 200;
    font-style: italic;
  }
  @font-face {
    font-family: 'Operator Mono';
    src: url(${OperatorMonoLightWOFF2}) format('woff2'), url(${OperatorMonoLightWOFF}) format('woff'),
      url(${OperatorMonoLightTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Operator Mono';
    src: url(${OperatorMonoLightItalicWOFF2}) format('woff2'), url(${OperatorMonoLightItalicWOFF}) format('woff'),
      url(${OperatorMonoLightItalicTTF}) format('truetype');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Operator Mono';
    src: url(${OperatorMonoBookWOFF2}) format('woff2'), url(${OperatorMonoBookWOFF}) format('woff'),
      url(${OperatorMonoBookTTF}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Operator Mono';
    src: url(${OperatorMonoBookItalicWOFF2}) format('woff2'), url(${OperatorMonoBookItalicWOFF}) format('woff'),
      url(${OperatorMonoBookItalicTTF}) format('truetype');
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: 'Operator Mono';
    src: url(${OperatorMonoMediumWOFF2}) format('woff2'), url(${OperatorMonoMediumWOFF}) format('woff'),
      url(${OperatorMonoMediumTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Operator Mono';
    src: url(${OperatorMonoMediumItalicWOFF2}) format('woff2'), url(${OperatorMonoMediumItalicWOFF}) format('woff'),
      url(${OperatorMonoMediumItalicTTF}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }
  @font-face {
    font-family: 'Operator Mono';
    src: url(${OperatorMonoBoldWOFF2}) format('woff2'), url(${OperatorMonoBoldWOFF}) format('woff'),
      url(${OperatorMonoBoldTTF}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: 'Operator Mono';
    src: url(${OperatorMonoBoldItalicWOFF2}) format('woff2'), url(${OperatorMonoBoldItalicWOFF}) format('woff'),
      url(${OperatorMonoBoldItalicTTF}) format('truetype');
    font-weight: 900;
    font-style: italic;
  }
`;

export default FontFaces;
