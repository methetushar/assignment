<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Storage;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function upload( $file, $path, $old = null ) {
        $code = date( 'ymdhis' ) . '-' . rand( 1111, 9999 );
        /*-------DELETE OLD IMAGE-------*/
        if ( !empty( $old ) ) {
            $oldFile = $this->oldFile( $old );
            if ( Storage::disk( 'public' )->exists( $oldFile ) ):
                Storage::delete( $oldFile );
            endif;
        }
        /*-------FILE/IMAGE UPLOAD-------*/
        if ( !empty( $file ) ) {
            $fileName = $code . $file->getClientOriginalName();
            return Storage::disk( 'public' )->putFileAs( 'upload/' . $path, $file, $fileName );
        }
    }
    /*-----OLD IMAGE-----*/
    public function oldFile( $file ) {
        $ex = explode( 'storage/', $file );
        return $ex[1] ?? "";
    }
}
