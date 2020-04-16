import React, {ChangeEvent} from 'react';
import './inputText.css';

class InputText extends React.PureComponent<any, { content: string, active: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = {
            content: '',
            active: false
        }
    }

    setActive = (status: boolean) => {
        this.setState({
            active: status
        })
    }

    setContent = (value: string) => {
        this.setState({
            content: value
        })
    }
    handleOnFocus = () => {
        this.setActive(true);
    }

    handleOnBlur = () => {
        !this.state.content && this.setActive(false);
    }

    handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setContent(e.target.value);
    }

    cssClass = () => {
        return `inputText ${this.props.className && this.props.className} ${this.state.active ? 'active' : ''}`
    }

    render() {
        return (
            <div className={`inputText ${this.state.active ? 'active' : ''}`}>
                <label className='inputText-label'>{this.props.label}</label>
                <input type='text' className='inputText-input'
                       value={this.state.content}
                       onFocus={this.handleOnFocus}
                       onBlur={this.handleOnBlur}
                       onChange={(e) => {
                           this.handleOnChange(e)
                       }}
                />
            </div>
        );
    }
}

export {InputText}