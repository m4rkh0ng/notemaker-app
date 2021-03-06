import React, { Component } from 'react';
import './NotePreview.css';

class NotePreview extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            props: this.state
        }
    }    

    render() {
        return (
            <div>
                <div className="note-preview-container">
                    <div className="note-preview-inner-container">
                        
                        {this.props.title.length > 18
                        ?
                        <div className="note-preview-title">{this.props.title.substring(0,16) + "..."}</div>
                        :
                        <div className="note-preview-title">{this.props.title}</div>
                        }                        
                        
                        {this.props.content.substring(0,80).length > 79 
                        ? 
                        <div className="note-preview-content">
                            {this.props.content.substring(0,80) + "..."}
                        </div>
                        :
                        <div className="note-preview-content">
                            {this.props.content.substring(0,80)}
                        </div>
                        }
                    </div>

                    {/* could map over the notes that exist in state, then have them individually represented by each NoteThumbnail */}
                </div>
            </div>
        )
    }
}



export default NotePreview;