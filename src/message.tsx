import React from 'react'
import messageHoc from './hoc'
const example = (props: any): any => <p>{props.name}, {props.message}</p>

const Message = messageHoc(example)
export default Message