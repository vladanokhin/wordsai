<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\ListModel;
use App\Models\ListWord;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        return $request->user()->lists;
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'user_id' => 'required|int',
        ]);
        ListModel::create($data);

        return response()->json($request->user()->lists->toArray());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  ListModel $list
     * @return JsonResponse
     */
    public function update(Request $request, ListModel $list)
    {
        $request->validate([
            'name'           => 'required|string',
            'user_id'        => 'required|int',
            'words.*.list_id'  => 'required|int',
            'words.*.word'     => 'string',
            'words.*.sentence' => 'string',
        ]);

        $list->update($request->except('words'));

        $words = $request->only('words')['words'];
        foreach ($words as $word) {
            ListWord::updateOrCreate($word);
        }

        return response()->json($request->user()->lists->toArray());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @param ListModel $list
     * @return JsonResponse
     */
    public function destroy(Request $request, ListModel $list)
    {
        $list->delete();
        return response()->json($request->user()->lists->toArray());
    }

    /**
     * Remove the specified word from list.
     *
     * @param Request $request
     * @param ListWord $word
     * @return JsonResponse
     */
    public function destroyWordOfList(Request $request, ListWord $word)
    {
        $word->delete();
        return response()->json($request->user()->lists->toArray());
    }
}
