import * as React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import formatDate from '../../util/formatDate'
import Card from '../../components/Card'

interface StatsProps {
  description: string
  watchers: number
  forks: number
  open_issues: number
  created_at: Date
  updated_at: Date
}

const DetailsCard: React.FC<StatsProps> = ({
  description,
  watchers,
  forks,
  open_issues,
  created_at,
  updated_at,
}) => {
  return (
    <Card>
      <View>
        <Text style={styles.descriptionLabel}>Description</Text>
        <Text>{description}</Text>
      </View>
      <View style={styles.dataContainer}>
        <View>
          <Text style={styles.dataLabel}>Watchers</Text>
          <Text style={styles.dataValue}>{watchers}</Text>
        </View>
        <View>
          <Text style={styles.dataLabel}>Forks</Text>
          <Text style={styles.dataValue}>{forks}</Text>
        </View>
        <View>
          <Text style={styles.dataLabel}>Open issues</Text>
          <Text style={styles.dataValue}>{open_issues}</Text>
        </View>
      </View>
      <View style={styles.dates}>
        <View>
          <Text style={styles.dataLabel}>Created</Text>
          <Text style={styles.dataValue}>{formatDate(created_at)}</Text>
        </View>
        <View>
          <Text style={styles.dataLabel}>Last update</Text>
          <Text style={styles.dataValue}>{formatDate(updated_at)}</Text>
        </View>
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  description: {
    fontWeight: 'bold',
  },
  descriptionLabel: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  dataLabel: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dataValue: {
    textAlign: 'center',
  },
  dates: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
})

export default DetailsCard
