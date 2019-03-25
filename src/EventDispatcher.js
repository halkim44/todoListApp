export default Event = function Event( sender ){
    this._sender = sender;
    this._listeners = [];
};

Event.prototype = {
    //add listemer closures to the list
    attach( listener ){
        this._listeners.push( listener );
    },
    notify( args ) {
        this._listeners.forEach( ( v,i ) => {
            this._listeners[i]( this._sender,args )
        })
    },
};
