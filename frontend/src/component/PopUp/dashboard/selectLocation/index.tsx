import { useState, useCallback } from "react"
import { Wrapper, Wrap } from "./style"
import TextButton from "@/src/component/Button/TextButton"
export default function SelectLocation(): JSX.Element {
    const [selectedLocationIndex, setSelectedLocationIndex] = useState(-1)
    const [locations, setLocations] = useState([
        "Living Room",
        "Dining",
        "Kitchen",
        "Masterbed",
        "Bedroom1",
        "Bedroom2",
        "Garage",
        "Lounge",
        "Bathroom",
    ])

    const TextButtonOnClick = useCallback(
        (index: number) => () => {
            if (index === selectedLocationIndex) setSelectedLocationIndex(-1)
            else setSelectedLocationIndex(index)
        },
        [selectedLocationIndex],
    )

    return (
        <Wrapper>
            <Wrap>
                {locations.map((location, index) => (
                    <TextButton
                        onClick={TextButtonOnClick(index)}
                        selected={index === selectedLocationIndex}
                    >
                        {location}
                    </TextButton>
                ))}
            </Wrap>
        </Wrapper>
    )
}
