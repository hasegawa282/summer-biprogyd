// -- basic library --
import styled from 'styled-components';
import styles from 'utils/styles';

/** styled componentsで作成した単純なコンポーネントを記述**/

/**Grid表示のWrapper**/
export const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

/**widthが100%のdiv**/
export const Content = styled.div`
  width: 100%;
`;

/**widthが100%のimg**/
export const GNImg = styled.img`
  width: 100%;
  height: auto;
  max-height: 100%;
`;

// ポップオーバーエリア
export const PopoverWholeArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 25px 0px 25px;
  overflow: scroll;
`;

// コンテンツの全体領域
export const WholeArea = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  padding: ${styles.whole_padding};
`;
