import React, { FC, useState, ChangeEvent, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import useOnClickOutside from "use-onclickoutside";
import useDebounce from "../../hooks/use-debounce";
import { search } from "../../common/api";
import Icon from "./icon";
import Placeholder from "./placeholder";
import Item from "./item";
import {
  Container,
  Controls,
  Input,
  Button,
  Divider,
  Dropdown,
  Title,
  SearchingPanel,
  ResultPanel
} from "./styled";

const AnimatedInput = animated(Input);
const AnimatedDivider = animated(Divider);
const AnimatedDropdown = animated(Dropdown);
const AnimatedSearchingPanel = animated(SearchingPanel);
const AnimatedResultPanel = animated(ResultPanel);

type State = "collapsed" | "open" | "recent" | "searching" | "result";

const Search: FC = () => {
  const containerRef = React.useRef(null);
  const [state, setState] = useState<State>("collapsed");
  const [data, setData] = useState<ReadonlyArray<Track>>([]);
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  useOnClickOutside(containerRef, () => {
    setState("collapsed");
    setQuery("");
  });

  useEffect(() => {
    if (debouncedQuery && debouncedQuery.length > 0) {
      search(debouncedQuery).then(tracks => {
        setData(tracks);
      });
    } else {
      setData([]);
    }
    if (state === "searching") {
      setState("result");
    }
  }, [debouncedQuery]);

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setState("searching");
    setQuery(event.currentTarget.value);
  };

  const inputStyle = useSpring({
    opacity: state === "collapsed" ? 0 : 1,
    width: state === "collapsed" ? 0 : 400
  });

  const dropdownStyle = useSpring({
    maxHeight: state === "collapsed" || state === "open" ? 0 : 219
  });

  const dividerStyle = useSpring({
    opacity: state === "collapsed" || state === "open" ? 0 : 1
  });

  const searchingPanelStyle = useSpring({
    opacity: state === "searching" ? 1 : 0,
    transform: `translateY(${state === "searching" ? 0 : 20}px)`
  });

  const resultPanelStyle = useSpring({
    opacity: state === "result" ? 1 : 0,
    transform: `translateY(${state === "result" ? 0 : 20}px)`,
    height: state === "result" ? "auto" : 0
  });

  return (
    <Container ref={containerRef}>
      <Controls>
        <AnimatedInput
          style={inputStyle}
          onChange={handleInputChange}
          placeholder="Start searching for songs..."
          onFocus={() => setState("recent")}
          value={query}
        />
        <Button onClick={() => setState("open")}>
          <Icon />
        </Button>
      </Controls>
      <AnimatedDivider style={dividerStyle} />
      <AnimatedDropdown style={dropdownStyle}>
        <AnimatedResultPanel
          style={resultPanelStyle}
          isOpen={state === "result"}
        >
          <Title>Search results</Title>
          {data.map(track => (
            <Item value={track} key={track.id} />
          ))}
        </AnimatedResultPanel>
        <AnimatedSearchingPanel
          style={searchingPanelStyle}
          isOpen={state === "searching"}
        >
          <Title>Searching...</Title>
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </AnimatedSearchingPanel>
      </AnimatedDropdown>
    </Container>
  );
};

export default Search;
