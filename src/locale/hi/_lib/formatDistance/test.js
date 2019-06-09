// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatDistance from '.'

describe('hi locale > formatDistance', function() {
  describe('lessThanXSeconds', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('lessThanXSeconds', 1) === 'एक क्षण से कम')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('lessThanXSeconds', 2) === '2 क्षण से कम')
      })
    })
  })

  describe('xSeconds', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xSeconds', 1) === 'एक क्षण')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xSeconds', 2) === '2 क्षण')
      })
    })
  })

  describe('halfAMinute', function() {
    it('returns a proper string', function() {
      assert(formatDistance('halfAMinute') === 'आधे मिनट')
    })

    it('ignores the second argument', function() {
      assert(formatDistance('halfAMinute', 123) === 'आधे मिनट')
    })
  })

  describe('lessThanXMinutes', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('lessThanXMinutes', 1) === 'एक मिनट से कम')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('lessThanXMinutes', 2) === '2 मिनट से कम')
      })
    })
  })

  describe('xMinutes', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMinutes', 1) === 'एक मिनट')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMinutes', 2) === '2 मिनट')
      })
    })
  })

  describe('aboutXHours', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXHours', 1) === 'लगभग एक घंटा')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXHours', 2) === 'लगभग 2 घंटे')
      })
    })
  })

  describe('xHours', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xHours', 1) === 'एक घंटा')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xHours', 2) === '2 घंटे')
      })
    })
  })

  describe('xDays', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xDays', 1) === 'एक दिन')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xDays', 2) === '2 दिन')
      })
    })
  })

  describe('aboutXMonths', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXMonths', 1) === 'लगभग एक महीना')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXMonths', 2) === 'लगभग 2 महीने')
      })
    })
  })

  describe('xMonths', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMonths', 1) === 'एक महीना')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xMonths', 2) === '2 महीने')
      })
    })
  })

  describe('aboutXYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXYears', 1) === 'लगभग एक साल')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('aboutXYears', 2) === 'लगभग 2 साल')
      })
    })
  })

  describe('xYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xYears', 1) === 'एक साल')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('xYears', 2) === '2 साल')
      })
    })
  })

  describe('overXYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('overXYears', 1) === 'एक वर्ष से अधिक')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('overXYears', 2) === '2 साल से अधिक')
      })
    })
  })

  describe('almostXYears', function() {
    context('when the count equals 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('almostXYears', 1) === 'लगभग एक साल')
      })
    })

    context('when the count is more than 1', function() {
      it('returns a proper string', function() {
        assert(formatDistance('almostXYears', 2) === 'लगभग 2 साल')
      })
    })
  })

  context('with a past suffix', function() {
    it('adds `ago` to a string', function() {
      var result = formatDistance('aboutXYears', 1, {
        addSuffix: true,
        comparison: -1
      })
      assert(result === 'लगभग एक साल पहले')
    })
  })

  context('with a future suffix', function() {
    it('adds `in` to a string', function() {
      var result = formatDistance('halfAMinute', null, {
        addSuffix: true,
        comparison: 1
      })
      assert(result === 'आधे मिनट में')
    })
  })
})
