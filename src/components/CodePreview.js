import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

function getHookTitle(hookCode) {
    const matches = hookCode.match(/function\s+(\w+)\(/);
    return matches ? matches[1] : '';
}

export default function CodePreview(props) {
    const handleCopy = () => {
        if (props?.code) {
            navigator.clipboard.writeText(props?.code);
            alert('Code copied to clipboard!');
        }
    };

    return (
        <div className="code-preview">
            <div className="code-preview-content">
                <div className="header">
                    <h2>{getHookTitle(props?.code)}</h2>
                    <div>
                        <button className="copy-button" onClick={handleCopy}>Copy Code</button>
                        <button className="close-button" onClick={props?.onClose}>X</button>
                    </div>
                </div>
                <div className="container">
                    <div className="code-editor">
                        <CodeMirror
                            value={props?.code || ''}
                            options={{
                                mode: 'jsx',
                                theme: 'material',
                                lineNumbers: true
                            }}
                            style={{ height: '100%' }}
                            onBeforeChange={(editor, data, value) => { }}
                            onChange={(editor, data, value) => { }}
                        />
                    </div>
                    <div className="code-render">
                        {props?.renderComponent}
                    </div>
                </div>

            </div>
        </div>
    );
}
