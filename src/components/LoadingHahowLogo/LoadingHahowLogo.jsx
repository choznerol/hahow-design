import { Lottie } from '@crello/react-lottie';
import {
  string, number, objectOf, oneOfType,
} from 'prop-types';
import React from 'react';
import animationData from './lottie/index.json';

/**
 * > 原始設計稿： https://zeroheight.com/5wafqtyfb/p/0568c3/b/91ebea/t/3732bc
 *
 * ## 使用時機
 *
 * 整頁讀取，例如初次進入網站，或於進入 Classroom，整體頁面切換時顯示
 *
 * ## Do
 *
 * > ![站內切換頁面](https://zeroheight.com/uploads/YAjYIvXsJePXmMGhTC3YRQ.gif)
 * >
 * > ▲ 如果是站內切換頁面時，可以有導覽列
 *
 * ---
 *
 * ## Don't
 *
 * > ![不會使用於個別區塊](https://zeroheight.com/uploads/Hq4e6tCta3XGYRQnjQRw5w.png)
 * >
 * > ▲ Logo 讀取效果不會使用於個別區塊
 *
 * ---
 *
 * > ![不會使用於個別區塊](https://zeroheight.com/uploads/9UjZyR4bxOfsCjz5CbjfsA.jpeg)
 * >
 * > ▲ 亦不會同時出現一個以上
 */
const LoadingHahowLogo = ({ className, size, style }) => (
  <Lottie
    width={`${size}px`}
    height={`${size}px`}
    className={className}
    config={{ animationData, loop: true, autoplay: true }}
    style={style}
  />
);

LoadingHahowLogo.propTypes = {
  /** 長與寬，預設 120px */
  size: number,
  /** 傳入 react-lottie 的最外層 <div> 的 class */
  className: string,
  /** 傳入 react-lottie 的最外層 <div> 的 inline style */
  style: objectOf(oneOfType([string, number])),
};

LoadingHahowLogo.defaultProps = {
  className: '',
  size: 120,
  style: {
    // 'margin-right': 'auto',
    // 'margin-left': 'auto',
  },
};

export default LoadingHahowLogo;
