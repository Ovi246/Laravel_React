@if ($message = Session::get('success'))
<div class="bg-green-100 border border-green-400 text-white-700 px-4 py-3 rounded relative" role="alert">
    <strong class="font-bold">Success!</strong>
    <span class="block sm:inline">{{ $message }}</span>
        <button class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none" onclick="closeAlert(event)">
          <span>×</span>
        </button>
      <script>
        function closeAlert(event){
          let element = event.target;
          while(element.nodeName !== "BUTTON"){
            element = element.parentNode;
          }
          element.parentNode.parentNode.removeChild(element.parentNode);
        }
      </script>
  </div>
@endif

@if ($message = Session::get('error'))
<div role="alert">
    <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
      Danger
    </div>
    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
      <p>{{ $message }}</p>
    </div>
  </div>
@endif

@if ($message = Session::get('warning'))
<div role="alert">
    <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
      Warning
    </div>
    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
      <p>{{ $message }}</p>
    </div>
  </div>
@endif

@if ($message = Session::get('info'))
<div role="alert">
    <div class="bg-yellow-500 text-white font-bold rounded-t px-4 py-2">
      Info
    </div>
    <div class="border border-t-0 border-red-400 rounded-b bg-yellow-100 px-4 py-3 text-red-700">
      <p>{{ $message }}</p>
    </div>
  </div>
@endif

@if ($errors->any())
<div role="alert">
    <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
      Danger
    </div>
    <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
      <p>{{ $message }}</p>
    </div>
  </div>
@endif