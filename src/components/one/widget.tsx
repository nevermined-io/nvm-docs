import React from 'react'
import {insertWidgetScriptBefore} from '../../utils'

export const Widget = () => {
  const onWidgetElementMounted = (widgetElement: HTMLElement | null) => {
    if (widgetElement) {
      insertWidgetScriptBefore('http://localhost:3000/lib/nvm-service-widget-loader.js', widgetElement)
    }
  }

  return (
    <div
      ref={onWidgetElementMounted}
      id="nvm-service-widget"
      {...{
        ["nvm-did"]: 'did:nv:e8f4339f28567ef65b94fa1b5ef8f88d202fa4ea2180e307ac2040cecabf8383'
      }}
    />
  )
}