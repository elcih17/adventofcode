use std::fs;

fn main() {
    let filename = "input.txt";
    let reader = fs::read_to_string(filename).expect("file not found");

    let lines: Vec<usize> = reader.lines().map(|l| l.parse().unwrap()).collect();
    let answer = lines.windows(2).filter(|v| v[0] < v[1]).count();

    println!("{}", answer);
}
