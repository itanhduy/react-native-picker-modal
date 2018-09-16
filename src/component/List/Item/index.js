import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { ImageComponent } from '../../../enhance'
import styles from './styles'

class Item extends PureComponent {
  /**
   * Check if we should render description
   */
  renderDescription = () => {
    const { item } = this.props
    const { description } = item
    return description && <Text>item.description</Text>
  }

  render() {
    const { item } = this.props
    const { image, title, rightItem } = item
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemInfo}>
          <ImageComponent.c style={styles.smallImage} source={{ uri: image }} {...ImageComponent.p} />
          <View style={styles.itemInfoText}>
            <Text>{title}</Text>
            {this.renderDescription()}
          </View>
        </View>
        <View>{rightItem}</View>
      </View>
    )
  }
}

Item.propsTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number,
  section: PropTypes.object
}

export default Item
