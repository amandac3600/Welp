class Stack
    def initialize
      @stack = []
    end

    def push(el)
      @stack.push(el)
    end

    def pop
      @stack.pop
      @stack
    end

    def peek
      @stack[0]
    end
end

class Queue
    def initialize
        @queue = []
    end
  
    def enqueue(el)
        @queue.push(el)
    end
  
    def dequeue
        @queue.shift
        @queue
    end
  
    def peek
        @queue[0]
    end
end

class Map
    def initialize
        @map = []
    end
  
    def set_key(key, val)
        @map.each do |pair|
            if pair[0] == key 
                self.delete(key)
            end
        end
        @map << [key, val]
    end

    def get(key)
        @map.each do |pair|
            return pair if pair[0] == key
        end
    end
  
    def delete(key)
        @map.each do |pair|
            @map.delete(pair) if pair[0] == key
        end
        @map
    end
  
    def show
        @map[0]
    end
end
  