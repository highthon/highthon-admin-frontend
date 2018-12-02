import React, { Component } from 'react';
import styled from 'styled-components';

import TagGenerator from './TagGenorator';

const EmailEditorWrapper = styled.div`
    position: fixed;
    bottom: 0px;
    right: 30px;
    width: 700px;
    box-sizing: border-box;
    box-shadow: 0 16px 16px 0 rgba(0, 0, 0, 0.16);
    background: #ffffff;
`;

const Header = styled.header`
    padding: 18px 32px;
    background: #649eff;
`;

const Title = styled.h3`
    margin: 0;
    font-size: 16px;
    line-height: 32px;
    color: #ffffff;
`;

const Content = styled.div`
`;

const Footer = styled.footer`
    overflow: hidden;
    background: #ffffff;
    padding: 0;
`;

const FileLoader = styled.label`
    float: left;
    box-sizing: border-box;
    display: inline-block;
    width: 80%;
    padding: 10px 12px;
    font-size: 12px;
    line-height: 32px;

    input{
        overflow: hidden!important;
        position: absolute!important;
        clip: rect(0 0 0 0)!important;
        width: 1px!important;
        height: 1px!important;
        margin: -1px!important;
    }
`;

const SubmitButton = styled.button`
    box-sizing: border-box;
    width: 20%;
    height: 100%;
    padding: 4px 14px;
    font-size: 12px;
    line-height: 32px;
    color: #ffffff;
    background: #649eff;
    border-radius: 3px;
    float: right;
`;

const EmailLabel = styled.label`
    display: inline-block;
    width: 100%;
    box-sizing: border-box;
    padding: 15px 32px;
    font-size: 12px;
    line-height: 32px;
    color: #808080;
    background: #ffffff;
    border-bottom: 1px solid #cccccc;
`;

const TitleLabel = styled(EmailLabel)`

`;

const TitleInput = styled.input`
    display: block;
    width: 100%;
    height: 100%;
    border: none;
    font-size: 12px;
    line-height: 32px;
`;

const EmailGenerator = styled(TagGenerator)`
    display: inline-block;
`;

const ContentTextArea = styled.textarea`
    box-sizing: border-box;
    width: 100%;
    height: 380px;
    padding: 32px;
    resize: none;
    border: none;
    font-size: 12px;
    line-height: 32px;
    color: #000000;
    border-bottom: 1px solid #cccccc;
`;

const MailEditor = class extends Component{
    constructor(props) {
        super(props);

        this.state = { 
            fileNameList: []
        };
        this.fileList = React.createRef();
        this.onLoadFileList = this.onLoadFileList.bind(this);
    }

    render() {
        const { fileNameList } = this.state;
        const maybeFileNameList = !!fileNameList.length ? fileNameList.join(', ') : '파일을 첨부하려면 클릭하시오.';

        return(
            <EmailEditorWrapper>
                <Header>
                    <Title>메일 쓰기</Title>
                </Header>
                <Content>
                    <EmailLabel>
                        받는 사람: &nbsp;
                        <EmailGenerator />
                    </EmailLabel>
                    <TitleLabel>
                        <TitleInput placeholder="제목"/>
                    </TitleLabel>
                    <ContentTextArea placeholder="내용을 입력해주세요."></ContentTextArea>
                </Content>
                <Footer>
                    <FileLoader>
                        {maybeFileNameList}
                        <input type="file" onChange={this.onLoadFileList} multiple={true} ref={this.fileList}/>
                    </FileLoader>
                    <SubmitButton type="button">메일 보내기</SubmitButton>
                </Footer>
            </EmailEditorWrapper>
        );
    }
    
    onLoadFileList(event) {
        const fileNameList = Array.from(this.fileList.current.files).map(file => file.name);

        this.setState({
            fileNameList
        });
    }
}

export default MailEditor;