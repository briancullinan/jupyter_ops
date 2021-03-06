fib = Enumerator.new do |y|
  a = b = 1

  loop do
    y << a

    a, b = b, a + b
  end
end

puts fib.lazy.take_while { |i| i < 4000000 }.select(&:even?).inject(:+)
