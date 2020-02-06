import React from 'react';
import MapView, { Callout } from 'react-native-maps';

class MyMarker extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      console.log(this.marker.showCallout, 'hello');
      this.marker.showCallout();
    }, 1);
  }

  render() {
    return (
      <MapView.Marker
        title={this.props.props.post.title}
        coordinate={this.props.coords}
        ref={ref => {
          this.marker = ref;
        }}
      >
        <Callout
          alphaHitTest
          tooltip
          onPress={e => {
            if (
              e.nativeEvent.action === 'marker-inside-overlay-press' ||
              e.nativeEvent.action === 'callout-inside-press'
            ) {
              return;
            }
            //!can make full custom callout if we need it
            //todo have on press redirect to the post.
            this.props.props.setMessageItemModal(this.props.props.post);
            console.log(this.props.props, 'marker 37');
          }}
        />
      </MapView.Marker>
    );
  }
}
export default MyMarker;
