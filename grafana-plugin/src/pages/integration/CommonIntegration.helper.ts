import React from 'react';
import { Text } from 'components/Text/Text';
import { ChannelFilter } from 'models/channel_filter/channel_filter.types';
import { components } from 'network/oncall-api/autogenerated-api.types';
import { Icon } from '@grafana/ui';

export const CommonIntegrationHelper = {
  getRouteConditionWording(channelFilters: Array<ChannelFilter['id']>, routeIndex: number): 'Default' | 'Else' | 'If' {
    const totalCount = Object.keys(channelFilters).length;

    if (routeIndex === totalCount - 1) {
      return 'Default';
    }
    return routeIndex ? 'Else' : 'If';
  },

  getRouteConditionTooltipWording(
    channelFilters: Array<ChannelFilter['id']>,
    routeIndex: number,
    labels: components['schemas']['LabelPair'][]
  ) {
    const totalCount = Object.keys(channelFilters).length;

    if (routeIndex === totalCount - 1) {
      return 'If the alert payload does not match to the previous routes, it will stick to the default route.';
    }

    // Labels
    if (labels?.length) {
      return 'Alerts matching these labels will be grouped to this route';
    }

    // Templating
    return 'Alerts will be grouped based on the Routing Template and escalated';
  },
};
