// file: /components/LinkButton.jsx
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

const LinkButton = (props) => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    // ⬆ filtering out props that `button` doesn’t know what to do with.
    ...rest
  } = props
  return (
    <button
      {...rest}
      onClick={(event) => {
        props.onClick(props.content) && onClick(event)
        history.push(to)
      }}
      className={props.active===props.content 
        ? "button is-fullwidth is-large is-active"
        : "button is-fullwidth is-large"}
    />
  )
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  content: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired
}

export default withRouter(LinkButton)