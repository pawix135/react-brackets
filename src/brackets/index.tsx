import React, { Fragment } from 'react';
import { Round, Bracket, SeedsList } from '../components/round';
import { renderSeed, renderTitle } from '../utils/renders';
import { ISingleEliminationProps } from '../types/SingleElimination';

const SingleElimination = ({
  rounds,
  rtl = false,
  roundClassName,
  bracketClassName,
  mobileBreakpoint = 992,
  renderSeedComponent = renderSeed,
  roundTitleComponent = renderTitle,
}: ISingleEliminationProps) => {
  const data = rounds.map((round, roundIdx) => (
    <Round key={round.title} className={roundClassName} mobileBreakpoint={mobileBreakpoint}>
      {round.title && roundTitleComponent(round.title, roundIdx)}
      <SeedsList>
        {round.seeds.map((seed, idx) => {
          return (
            <Fragment key={seed.id}>
              {renderSeedComponent({
                seed,
                breakpoint: mobileBreakpoint,
                roundIndex: roundIdx,
                seedIndex: idx,
                rounds,
              })}
            </Fragment>
          );
        })}
      </SeedsList>
    </Round>
  ));

  return (
    <Bracket className={bracketClassName} dir={rtl ? 'rtl' : 'ltr'} mobileBreakpoint={mobileBreakpoint}>
      {data}
    </Bracket>
  );
};

export { SingleElimination };
