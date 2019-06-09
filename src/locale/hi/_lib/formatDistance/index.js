var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'एक क्षण से कम',
    other: '{{count}} क्षण से कम'
  },

  xSeconds: {
    one: 'एक क्षण',
    other: '{{count}} क्षण'
  },

  halfAMinute: 'आधे मिनट',

  lessThanXMinutes: {
    one: 'एक मिनट से कम',
    other: '{{count}} मिनट से कम'
  },

  xMinutes: {
    one: 'एक मिनट',
    other: '{{count}} मिनट'
  },

  aboutXHours: {
    one: 'लगभग एक घंटा',
    other: 'लगभग {{count}} घंटे'
  },

  xHours: {
    one: 'एक घंटा',
    other: '{{count}} घंटे'
  },

  xDays: {
    one: 'एक दिन',
    other: '{{count}} दिन'
  },

  aboutXMonths: {
    one: 'लगभग एक महीना',
    other: 'लगभग {{count}} महीने'
  },

  xMonths: {
    one: 'एक महीना',
    other: '{{count}} महीने'
  },

  aboutXYears: {
    one: 'लगभग एक साल',
    other: 'लगभग {{count}} साल'
  },

  xYears: {
    one: 'एक साल',
    other: '{{count}} साल'
  },

  overXYears: {
    one: 'एक वर्ष से अधिक',
    other: '{{count}} साल से अधिक'
  },

  almostXYears: {
    one: 'लगभग एक साल',
    other: 'लगभग {{count}} साल'
  }
}

export default function formatDistance(token, count, options) {
  options = options || {}

  var result
  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token]
  } else if (count === 1) {
    result = formatDistanceLocale[token].one
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count)
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return result + ' में'
    } else {
      return result + ' पहले'
    }
  }

  return result
}
