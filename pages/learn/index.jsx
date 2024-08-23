import Navbar from "@/components/navbar_components/Navbar";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const h1 = "font-semibold w-full text-center text-purple-950 text-4xl my-6";
const h2 = "font-medium  text-3xl my-6 text-center text-orange-950";
const syntax = "w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg p-4 my-8";
const lang = "flex flex-col md:flex-row pl-5   justify-between items-center";

const LearningPage = () => {
  return (
    <div className='border-2 border-binance_green rounded-b-lg'>
      <Navbar />
      <div className='px-10 pt-[130px] max-w-full mx-auto'>
        <h1 className={h1}>Understanding Sets in JavaScript</h1>
        <p className='text-lg text-gray-700 max-w-5xl mx-auto leading-relaxed mb-8'>
          Sets are a collection of unique values in JavaScript. They allow you
          to store unique values of any type, whether primitive values or object
          references. Below are examples in different languages along with their
          time complexities (Big O notation).
        </p>

        <div className={lang}>
          <h2 className={h2}>1.) JavaScript Examples</h2>
          <div className={syntax}>
            <SyntaxHighlighter language='javascript' style={darcula}>
              {`// 1. Creating a Set and adding elements
const mySet = new Set();
mySet.add(1);   // O(1) - Insertion
mySet.add(5);   // O(1) - Insertion
mySet.add(5);   // O(1) - Insertion, but no effect as it's a duplicate
mySet.add('hello');  // O(1) - Insertion
console.log(mySet);  // O(n) - Iteration over the set

// 2. Checking if a Set contains a value
console.log(mySet.has(5));  // O(1) - Membership check
console.log(mySet.has(10)); // O(1) - Membership check

// 3. Removing elements from a Set
mySet.delete(5);  // O(1) - Deletion
console.log(mySet); // O(n) - Iteration over the set

// 4. Iterating over a Set
mySet.forEach((value) => {  // O(n) - Iteration
  console.log(value);
});
// Output: 
// 1
// 'hello'`}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className={lang}>
          <h2 className={h2}>2.) Python Examples</h2>
          <div className={syntax}>
            <SyntaxHighlighter language='python' style={darcula}>
              {`# 1. Creating a Set and adding elements
my_set = set()
my_set.add(1)   # O(1) - Insertion
my_set.add(5)   # O(1) - Insertion
my_set.add(5)   # O(1) - Insertion, but no effect as it's a duplicate
my_set.add('hello')  # O(1) - Insertion
print(my_set)  # O(n) - Iteration over the set

# 2. Checking if a Set contains a value
print(5 in my_set)  # O(1) - Membership check
print(10 in my_set)  # O(1) - Membership check

# 3. Removing elements from a Set
my_set.remove(5)  # O(1) - Deletion
print(my_set)  # O(n) - Iteration over the set

# 4. Iterating over a Set
for value in my_set:  # O(n) - Iteration
    print(value)
# Output: 
# 1
# hello`}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className={lang}>
          <h2 className={h2}>3.) Java Examples</h2>
          <div className={syntax}>
            <SyntaxHighlighter language='java' style={darcula}>
              {`import java.util.HashSet;
import java.util.Set;

public class SetExample {
    public static void main(String[] args) {
        // 1. Creating a Set and adding elements
        Set<Object> mySet = new HashSet<>();
        mySet.add(1);   // O(1) - Insertion
        mySet.add(5);   // O(1) - Insertion
        mySet.add(5);   // O(1) - Insertion, but no effect as it's a duplicate
        mySet.add("hello");  // O(1) - Insertion
        System.out.println(mySet);  // O(n) - Iteration over the set

        // 2. Checking if a Set contains a value
        System.out.println(mySet.contains(5));  // O(1) - Membership check
        System.out.println(mySet.contains(10)); // O(1) - Membership check

        // 3. Removing elements from a Set
        mySet.remove(5);  // O(1) - Deletion
        System.out.println(mySet);  // O(n) - Iteration over the set

        // 4. Iterating over a Set
        for (Object value : mySet) {  // O(n) - Iteration
            System.out.println(value);
        }
    }
}`}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className={lang}>
          <h2 className={h2}>4.) C++ Examples</h2>
          <div className={syntax}>
            <SyntaxHighlighter language='cpp' style={darcula}>
              {`#include <iostream>
#include <unordered_set>

using std::cout;
using std::endl;
using std::unordered_set;

int main() {
    // 1. Creating an Unordered Set and adding elements
    unordered_set<int> mySet;
    mySet.insert(1);   // O(1) - Insertion
    mySet.insert(5);   // O(1) - Insertion
    mySet.insert(5);   // O(1) - Insertion, but no effect as it's a duplicate
    mySet.insert(10);  // O(1) - Insertion

    for (const auto& elem : mySet)
        cout << elem << " "; // O(n) - Iteration over the set
    cout << endl;

    // 2. Checking if a Set contains a value
    cout << (mySet.find(5) != mySet.end()) << endl; // O(1) - Membership check
    cout << (mySet.find(20) != mySet.end()) << endl; // O(1) - Membership check

    // 3. Removing elements from a Set
    mySet.erase(5);  // O(1) - Deletion
    for (const auto& elem : mySet)
        cout << elem << " "; // O(n) - Iteration over the set
    cout << endl;

    return 0;
}
`}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPage;
