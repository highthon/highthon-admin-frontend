import React, { Component } from 'react';
import styled from 'styled-components';

const BACKSPACE_KEYCODE = 8;

const TagWrapper = styled.div`

`;

const Input = styled.input`
    height: 100%;
    border: none;
    margin-left: 10px;
`;

const Tag = styled.span`
    display: inline-block;
    padding: 0 10px;
    margin: 5px 0;

    &+&{
        margin-left: 8px;
    }

    border-radius: 5px;
    background-color: #dddddd;
`;

const TagGenorator = class extends Component{
    constructor(props) {
        super(props);

        this.state = {
            tagList: [],
            inputText: ''
        };
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onKeyupInput = this.onKeyupInput.bind(this);
    }

    render() {
        const maybeTagList = this.state.tagList.map((item, index) => (<Tag key={`tag-${index}`}>{item}</Tag>))

        return(
            <TagWrapper {...this.props}>
                {maybeTagList}
                <Input value={this.state.inputText} onChange={this.onChangeInput} onKeyUp={this.onKeyupInput}/>
            </TagWrapper>
        );
    }

    onChangeInput(event) {
        const { value: inputText } = event.target;
        const { tagList } = this.state;

        const splittedInputText = inputText.split(' ');

        if (splittedInputText.length > 1) {
            const newInputText = splittedInputText.pop();
            const newTagList = [...tagList, ...splittedInputText.filter(item => !!item)];

            this.setState({
                inputText: newInputText,
                tagList: newTagList
            });

            return;
        }

        this.setState({
            inputText
        });
    }

    onKeyupInput(event) {
        if (event.keyCode === BACKSPACE_KEYCODE && !this.state.inputText) {
            const { tagList } = this.state;

            if (!tagList.length) return;

            const newTagList = [...tagList];
            const pervTag = newTagList.pop();

            this.setState({
                inputText: pervTag,
                tagList: newTagList
            });
        }

        return;
    }
}

export default TagGenorator;