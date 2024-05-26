// 配列の統計量を求める (pandasのdescrive)
function stat(data) {
    const avg = data.reduce((sum, x) => sum + x) / data.length
    const std = Math.sqrt(data.reduce((sum, x) => sum + (x - avg) * (x - avg)) / data.length)
    const sorted = data.toSorted()
    const min = sorted[0]
    const max = sorted[sorted.length - 1]
    const per10 = sorted[Math.floor(sorted.length / 10)]
    const per25 = sorted[Math.floor(sorted.length / 4)]
    const med = sorted[Math.floor(sorted.length / 2)]
    const per75 = sorted[Math.floor(sorted.length * 3 / 4)]
    const per90 = sorted[Math.floor(sorted.length * 9 / 10)]

    const obj = {
        count: data.length,
        mean: avg,
        std: std,
        min,
        per10, per25, per50: med, per75, per90, max
    }
    console.log(obj)
    return obj
}
