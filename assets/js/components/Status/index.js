import React, {Component} from 'react';

class Status extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const {room, isCreated, isExists} = this.props;
        let subTitle = null, link = "/" + room.slug;
        if (isCreated) {
            subTitle = room.is_protected ? "created and ready for protected istişare!" : "created and ready for open istişare!";
        }
        if(isExists){
            subTitle = room.is_protected ? "already exists and open for protected istişare!" : "already exists and ready for open istişare!";
        }
        
        return(
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h3 className="display-3 text-center">
                        {room.name}
                    </h3>
                    <p className="lead">
                        {subTitle}
                    </p>
                    <p className="lead">
                        <a className={isExists ? "btn btn-warning btn-lg" : "btn btn-success btn-lg"} href={link} role="button">
                            Lets istişare! :)
                        </a>
                    </p>
                </div>
            </div>
        )
    }
}

export default Status;