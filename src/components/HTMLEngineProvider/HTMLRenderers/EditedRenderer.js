import _ from 'underscore';
import React from 'react';
import CONST from '../../../CONST';
import htmlRendererPropTypes from './htmlRendererPropTypes';
import withLocalize, {withLocalizePropTypes} from '../../withLocalize';
import Text from '../../Text';
import variables from '../../../styles/variables';
import themeColors from '../../../styles/themes/default';
import styles from '../../../styles/styles';
import editedLabelStyles from '../../../styles/editedLabelStyles';

const propTypes = {
    ...htmlRendererPropTypes,
    ...withLocalizePropTypes,
};

function EditedRenderer(props) {
    const defaultRendererProps = _.omit(props, ['TDefaultRenderer', 'style', 'tnode']);
    const isPendingDelete = Boolean(props.tnode.attributes.deleted !== undefined);
    return (
        <Text
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...defaultRendererProps}
            fontSize={variables.fontSizeSmall}
            color={themeColors.textSupporting}
            style={[editedLabelStyles, isPendingDelete && styles.offlineFeedback.deleted]}
        >
            {/* Native devices do not support margin between nested text */}
            <Text
                selectable={false}
                style={[styles.w1, styles.userSelectNone]}
                dataSet={{[CONST.SELECTION_SCRAPER_HIDDEN_ELEMENT]: true}}
            >
                {' '}
            </Text>
            {props.translate('reportActionCompose.edited')}
        </Text>
    );
}

EditedRenderer.propTypes = propTypes;
EditedRenderer.displayName = 'EditedRenderer';

export default withLocalize(EditedRenderer);
