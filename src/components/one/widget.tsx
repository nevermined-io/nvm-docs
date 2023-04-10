import React from 'react'
import {insertWidgetScriptBefore} from '../../utils'

export const Widget = () => {
  const onWidgetElementMounted = (widgetElement: HTMLElement | null) => {
    if (widgetElement) {
      insertWidgetScriptBefore('https://widgets.mumbai.nevermined.one/nvm-service-widget-loader.js', widgetElement)
    }
  }

  return (
    <div
      ref={onWidgetElementMounted}
      id="nvm-service-widget"
      {...{
        ["nvm-did"]: 'did:nv:fca684cd08d1a8abac14ea40ff6a9dfc690694987c1a918c02c118f433d47756'
      }}
    />
  )
}