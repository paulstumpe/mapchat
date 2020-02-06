import React from 'react';

import MapView, {Callout} from 'react-native-maps'
class MyMarker extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      console.log(this.marker.showCallout, "hello")
      this.marker.showCallout()}, 1);
  }

  render() {
    return (
      <MapView.Marker
        title="cool"
        coordinate={this.props.coords}
        ref={ref => { this.marker = ref; }}
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
            console.log('callout pressed map js');
          }}
        />
      </MapView.Marker>
    );
  }
}
export default MyMarker;