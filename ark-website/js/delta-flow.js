/** Watershed state. The beaver's laws are visible as water, not a chart. */

export function createWatershed() {
  let mode = 'shared';
  const modes = {
    shared: {
      wetland: 'fed',
      downstream: 'lit',
      circulation: 'steady',
      neris: 'The channel is shared. Every neighbor downstream still has water, including the ones you cannot see.',
      beaver: 'Slow. Spread. Sink. I will allow it.',
      osprey: 'From up here the wetland is holding. Precision looks like this.',
    },
    wide: {
      wetland: 'starved',
      downstream: 'dim',
      circulation: 'racing',
      neris: 'You opened the main channel wide. The water is fast, and the wetland is going hungry. Speed is not the same as circulation.',
      beaver: 'That river is arguing with itself. Slow it. Spread it. Sink it.',
      osprey: 'I can see the dry edge from here. The neighbors you cannot see are already short.',
    },
    beaver: {
      wetland: 'full',
      downstream: 'lit',
      circulation: 'deep',
      neris: 'Steps and pools. The whole system changed its mind. Nothing was cut off. The flow changed form.',
      beaver: 'Seventeen dams would also work. This will do. I judge it fairly. Probably.',
      osprey: 'Checked from above. The downstream lights are honest.',
    },
  };

  function snapshot() {
    return { mode, ...modes[mode] };
  }

  return {
    snapshot,
    set(next) {
      if (!modes[next]) return { ok: false };
      mode = next;
      return { ok: true, ...snapshot() };
    },
  };
}
