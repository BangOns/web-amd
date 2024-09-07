export function ShuffleDataBerita(DataBerita: IDataBerita[]) {
  const dataShuffle = [...DataBerita];

  for (let i = dataShuffle.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [dataShuffle[i], dataShuffle[j]] = [dataShuffle[j], dataShuffle[i]];
  }
  return dataShuffle;
}
