import React from 'react';
import { Scrollbar } from '..';

/**
 * Компонент-обертка, добавляющий к контенту скроллбар.
 * Представляет собой обертку над компонентом <Scrollbar />.
 * Высота скроллбара будет автоматически подстроена под высоту контента.
 */
declare class ContentHeightScrollbar extends Scrollbar {}

export default ContentHeightScrollbar;