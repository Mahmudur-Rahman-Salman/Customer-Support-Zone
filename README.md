1. JSX কী? আর কেন ব্যবহার করা হয়?

   JSX মানে হলো JavaScript XML।
   সহজ করে বললে, JSX দিয়ে আমরা JavaScript-এর ভেতরেই HTML-এর মতো কোড লিখতে পারি।

   # কেন JSX ব্যবহার করা হয়?
   # UI কোড পড়তে সহজ হয়
   # HTML + JavaScript একসাথে লেখা যায়
   # কোড কম এবং পরিষ্কার হয়

2. State আর Props এর পার্থক্য কী?

   # Props কী?
   # Parent component থেকে child component-এ ডাটা পাঠাতে ব্যবহার হয়
   # Read-only (পরিবর্তন করা যায় না)
   # Component-এর বাইরে থেকে আসে

   State কী?
   # Component-এর নিজের ডাটা
   # Change করা যায়
   # Component-এর ভেতরে থাকে

3. useState hook কী? আর এটা কীভাবে কাজ করে?

   useState হলো React-এর একটি hook।
   এটা দিয়ে component-এর state বানানো হয়।

   useState কী করে?
   # একটি state variable বানায়
   # সেই state update করার function দেয়

4. React-এ Component-এর মধ্যে State কীভাবে শেয়ার করা হয়?

   State উপরে তুলতে হয় (Lifting State Up)
   নিয়ম:
   Common parent component-এ state রাখো
   Props দিয়ে child component-এ পাঠাও

   # উদাহরণ:
   Parent → state রাখবে
   Child A & Child B → props দিয়ে সেই state পাবে

5. React-এ Event Handling কীভাবে করা হয়?

    React এ event handling JavaScript এর মতোই, কিন্তু একটু নিয়ম আছে।

    # নিয়ম:
    Event নাম camelCase হয়
    Function পাঠাতে হয়, কল না
