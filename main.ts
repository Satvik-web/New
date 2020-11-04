input.calibrateCompass()
basic.forever(function () {
    if (input.compassHeading() < 45) {
        basic.showArrow(ArrowNames.NorthEast)
    }
    if (input.compassHeading() > 45 && input.compassHeading() < 135) {
        basic.showArrow(ArrowNames.SouthEast)
    }
    if (input.compassHeading() > 135 && input.compassHeading() < 225) {
        basic.showArrow(ArrowNames.SouthWest)
    }
    if (input.compassHeading() > 225 && input.compassHeading() < 315) {
        basic.showArrow(ArrowNames.NorthWest)
    }
})
basic.forever(function () {
    if (input.compassHeading() < 135) {
        basic.showArrow(ArrowNames.East)
    }
    if (input.compassHeading() < 225) {
        basic.showArrow(ArrowNames.South)
    }
    if (input.compassHeading() < 315) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.North)
    }
})
