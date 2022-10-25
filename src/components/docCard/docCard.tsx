import React, { type ReactNode, useState, useEffect } from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import {
  findFirstCategoryLink,
  useDocById,
} from '@docusaurus/theme-common/internal'
import isInternalUrl from '@docusaurus/isInternalUrl'
import { translate } from '@docusaurus/Translate'
import type { Props } from '@theme/DocCard'

import styles from '@docusaurus/theme-classic/lib/theme/DocCard/styles.module.css'
import type {
  PropSidebarItemCategory,
  PropSidebarItemLink,
} from '@docusaurus/plugin-content-docs'

type CardContainerProps = {
  href: string;
  className?: string | unknown;
  children: ReactNode;
}

type CardLayoutProps = {
  href: string;
  icon: ReactNode;
  title: string;
  description?: string;
  className?: string | unknown;
}

function Icon({ defaultIcon, iconStaticFolderPath, iconClassName }) {
  const [image, setImage] = useState()

  useEffect(() => {
    if (iconStaticFolderPath) {
      import(`@site/static/${iconStaticFolderPath}`).then((result) =>
        setImage(result.default)
      )
    }
  }, [iconStaticFolderPath])

  if (iconStaticFolderPath && image) {
    return (
      <span className="sidebar-item-doc-card__icon-wrapper">
        <img
          src={image}
          className={clsx('sidebar-item-doc-card__icon', iconClassName)}
        />
      </span>
    )
  }

  if (!iconStaticFolderPath) {
    return (
      <span className="sidebar-item-doc-card__icon-wrapper">{defaultIcon}</span>
    )
  }

  return null
}

function CardContainer({
  href,
  children,
  className,
}: CardContainerProps): JSX.Element {
  return (
    <Link href={href} className={clsx('card', styles.cardContainer, className)}>
      {children}
    </Link>
  )
}

function CardLayout({
  href,
  icon,
  title,
  description,
  className,
}: CardLayoutProps): JSX.Element {
  return (
    <CardContainer href={href} className={className}>
      {icon}
      <h2
        className={clsx('sidebar-item-doc-card__title', styles.cardTitle)}
        title={title}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            'sidebar-item-doc-card__description',
            styles.cardDescription
          )}
          title={description}
        >
          {description}
        </p>
      )}
    </CardContainer>
  )
}

function CardCategory({
  item,
}: {
  item: PropSidebarItemCategory;
}): JSX.Element | null {
  const href = findFirstCategoryLink(item)

  // Unexpected: categories that don't have a link have been filtered upfront
  if (!href) {
    return null
  }

  return (
    <CardLayout
      href={href}
      icon={
        <Icon
          defaultIcon="🗃️"
          iconStaticFolderPath={item.customProps?.iconStaticFolderPath}
          iconClassName={item.customProps?.iconClassName}
        />
      }
      title={item.label}
      description={translate(
        {
          message: '{count} items',
          id: 'theme.docs.DocCard.categoryDescription',
          description:
            'The default description for a category card in the generated index about how many items this category includes',
        },
        { count: item.items.length }
      )}
      className={clsx(
        'sidebar-item-doc-card',
        'sidebar-item-doc-card__category',
        item.customProps?.className
      )}
    />
  )
}

function CardLink({ item }: { item: PropSidebarItemLink }): JSX.Element {
  const defaultIcon = isInternalUrl(item.href) ? '📄️' : '🔗'
  const doc = useDocById(item.docId ?? undefined)

  return (
    <CardLayout
      href={item.href}
      icon={
        <Icon
          defaultIcon={defaultIcon}
          iconStaticFolderPath={item.customProps?.iconStaticFolderPath}
          iconClassName={item.customProps?.iconClassName}
        />
      }
      title={item.label}
      description={doc?.description}
      className={clsx(
        'sidebar-item-doc-card',
        'sidebar-item-doc-card__link',
        item.customProps?.className
      )}
    />
  )
}

export default function DocCard({ item }: Props): JSX.Element {
  switch (item.type) {
    case 'link':
      return <CardLink item={item} />
    case 'category':
      return <CardCategory item={item} />
    default:
      throw new Error(`unknown item type ${JSON.stringify(item)}`)
  }
}
