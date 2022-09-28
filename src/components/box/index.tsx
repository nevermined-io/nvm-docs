import React from 'react';
import clsx from 'clsx';
import { BEM, UiText } from '@nevermined-io/styles';
import styles from './styles.module.scss';
import Link from '@docusaurus/Link';

const b = BEM('box', styles);

export type BoxItem = {
  title: string;
  link?: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  png?: string;
  description: JSX.Element;
  className?: string;
};

export const Box = ({
  title,
  link,
  Svg,
  png,
  description,
  className,
}: BoxItem) => {
  const content = (
    <div className={clsx(b('container'), className)}>
      <div className="padding-horiz--md">
        {Svg && <Svg className={b('svg')} />}
        {png && <img className={b('svg')} role="img" src={png} />}
      </div>
      <div className="padding-horiz--md">
        <UiText type="h3">{title}</UiText>
        <UiText type="p">{description}</UiText>
      </div>
    </div>
  );

  return (
    <>
      {link ? (
        <Link className={b('link')} to={link}>
          {content}
        </Link>
      ) : (
        content
      )}
    </>
  );
};
