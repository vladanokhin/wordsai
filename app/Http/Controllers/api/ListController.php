<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\ListModel;
use App\Models\ListWord;
use Illuminate\Http\Request;

class ListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return $request->user()->lists;
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ListModel $list)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  ListModel $list
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ListModel $list)
    {
        $list->update($request->except('words'));
        $list->words()->upsert($request->only('words')['words'],
                                ['word', 'sentence'], ['word', 'sentence']);

        return response('Updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  ListModel $list
     * @return \Illuminate\Http\Response
     */
    public function destroy(ListModel $list)
    {
        $list->delete();
        return response('Deleted');
    }
}
