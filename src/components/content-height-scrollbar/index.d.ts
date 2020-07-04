import React from 'react';
import { Scrollbar } from '..';

/**
 * Компонент-обертка, добавляющий к контенту скроллбар.
 * Представляет собой обертку над компонентом <Scrollbar />.
 * Высота скроллбара будет автоматически подстроена под высоту контента.
 * Данный компонент наиболее применим в случае, когда необходимо отобразить список элементов, минимальная высота которого всегда равна высоте контента, но максимальная высота ограничена внешними стилями (через max-height).
 */
declare class ContentHeightScrollbar extends Scrollbar {}

export default ContentHeightScrollbar;