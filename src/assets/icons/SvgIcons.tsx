import * as React from 'react'
import { BaseIcon } from './BaseIcon';
import { DevIcons } from './DevIcons';

interface BaseSvgElementProps {
    icon: BaseIcon;
    width?: number;
    height?: number;
    elementType?: keyof JSX.IntrinsicElements;
}

export const DevIconMap = new Map([
    ["android", DevIcons.android],
    ["java", DevIcons.java],
    ["kotlin", DevIcons.kotlin],
]);

export default function MyIcon({ icon, width = 32, height = 32, elementType: ElementType = 'svg' }: BaseSvgElementProps): JSX.Element {
    return (
        <ElementType
            viewBox="0 0 128 128"
            width={width}
            height={height}
            className='my-icon'
            dangerouslySetInnerHTML={{ __html: icon.path }}
        />
    );
}